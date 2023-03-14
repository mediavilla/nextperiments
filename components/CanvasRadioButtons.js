import React from 'react';

function RadioButton(props) {
    const { label, name, value, onChange, selectedOption } = props;

    return (
        <label>
            <input
                type="radio"
                name={name}
                value={value}
                checked={selectedOption === value}
                onChange={() => onChange(value)}
            />
            {label}
        </label>
    );
}


export default function CanvasRadioButtons(props) {
    const { selectedOption, onOptionChange } = props;

    return (
        <div>
            <RadioButton
                label="Two side"
                name="canvasOption"
                value="mirrorSides"
                selectedOption={selectedOption}
                onChange={onOptionChange}
            />
            <RadioButton
                label="Four quadrants"
                name="canvasOption"
                value="mirrorQuadrants"
                selectedOption={selectedOption}
                onChange={onOptionChange}
            />
            <RadioButton
                label="Radial pattern"
                name="canvasOption"
                value="radialPattern"
                selectedOption={selectedOption}
                onChange={onOptionChange}
            />
        </div>
    );
}




switch (selectedSiteType) {
    case 'brand':
        cost = cost + 1000;
        break;
    case 'ecomm':
        cost = cost + 2000;
        break;
    case 'event':
        cost = cost + 3000;
        break;
    case 'internal':
        cost = cost + 4000;
        break;
    case 'landing':
        cost = cost + 5000;
        break;
    case 'dotcom':
        cost = cost + 6000;
        break;
    case 'marketing':
        cost = cost + 7000;
        break;
    case 'microsite':
        cost = cost + 8000;
        break;
    case 'webapp':
        cost = cost + 9000;
        break;
    case 'other':
        cost = cost + 10000;
        break;
}