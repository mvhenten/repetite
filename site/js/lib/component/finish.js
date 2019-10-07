import ElementContainer from "./container.js";

class FinishContainer extends ElementContainer {
    show(questions) {
        const { score } = questions;
        
        const mots = {
            "Keep practicing": 0.15,
            "Not good": 0.25,
            "Not enough yet": 0.35,
            "You can do better": 0.45,
            "Almost there": 0.55,
            "Not bad": 0.65,
            "One more time": 0.75,
            "Pretty good": 0.85,
            "Excellent": 0.95,
            "Perfect": 1
        };
        
        
        for (let key in mots) {
            let minScore = mots[key];
            
            if (minScore < score)
                continue;
                
            this.update(`score: ${Math.round(score*100)}% - ${key}`);
            break;
        }
        
        super.show();
    }
}

export default FinishContainer;