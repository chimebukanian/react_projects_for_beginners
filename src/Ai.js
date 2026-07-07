import {styles} from './utils';

export default function Ai() {
    
    const aiResponse = {
        message: "Your resume has been analyzed!",
        score: 85,
        recommendations: [
            "Consider adding more details about your work experience.",
            "Highlight your achievements and skills more prominently.",
            "Include relevant keywords from the job description."
        ]
    }

    return (
        <section style={styles.container}>
            <h2 style={styles.heading}>AI Resume Analysis</h2>
            <p style={styles.text}>{aiResponse.message}</p>
            <p style={styles.text}>Score: {aiResponse.score}</p>
            <h3 style={styles.text}>{aiResponse.recommendations}</h3>
        </section>
    )
}