// DifficultySelector.js
import React from 'react';

const DifficultySelector = ({ onSelectDifficulty }) => {
    const difficulties = ['Easy', 'Medium', 'Hard'];

    return (
        <div className="difficulty-selection">
            <h2>Select Difficulty Level</h2>
            {difficulties.map((difficulty) => (
                <button key={difficulty} onClick={() => onSelectDifficulty(difficulty)}>
                    {difficulty}
                </button>
            ))}
        </div>
    );
};

export default DifficultySelector;
