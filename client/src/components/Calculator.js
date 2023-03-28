import React, { useState } from 'react';

const Calculator = () => {
    const [age, setAge] = useState('');
    const [height, setHeight] = useState('');
    const [gender, setGender] = useState('male');
    const [weight, setWeight] = useState('');
    const [activityLevel, setActivityLevel] = useState('sedentary');
    const [maintenanceCalories, setMaintenanceCalories] = useState('');
  
    const calculateMaintenanceCalories = () => {
      console.log('calculate triggered');
      console.log('age:', age, 'height:', height, 'gender:', gender, 'weight:', weight, 'activityLevel:', activityLevel);
      // Calculate the user's basal metabolic rate (BMR) using the Mifflin-St Jeor equation
      const bmr =
        gender === 'male'
          ? 10 * weight + 6.25 * height - 5 * age + 5
          : 10 * weight + 6.25 * height - 5 * age - 161;
    
      // Multiply BMR by activity level to get maintenance calories
      let maintenanceCalories;
      console.log('before switch');
      switch (activityLevel) {
        case 'sedentary':
          maintenanceCalories = bmr * 1.2;
          break;
          case 'lightlyActive':
            maintenanceCalories = bmr * 1.375;
            break;
            case 'moderatelyActive':
              maintenanceCalories = bmr * 1.55;
              break;
              case 'veryActive':
                maintenanceCalories = bmr * 1.725;
                break;
                case 'extraActive':
          maintenanceCalories = bmr * 1.9;
          break;
          default:
            maintenanceCalories = bmr * 1.2;
          }
          return setMaintenanceCalories(maintenanceCalories);
    }
      
  return (
    <div>
      <form>
          <div className='title-container'>
            <h3>EZ Maintenance Calculator</h3>
          </div>
          <div className='padded-info'>
          <label>
            Age:
            <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
          </label>
          <label>
            Height (in inches):
            <input
              style={{width: '50px', textAlign: 'center' }}
              type="number" value={height}
              onChange={(e) => setHeight(e.target.value)} 
            />
          </label>
          <label>
            Gender:
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
          <label>
            Weight (in pounds):
            <input
              style={{width: '50px', textAlign: 'center' }}
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </label>
          <label>
            Activity level:
            <select value={activityLevel} onChange={(e) => setActivityLevel(e.target.value)}>
              <option value="sedentary">Sedentary</option>
              <option value="lightlyActive">Lightly Active</option>
              <option value="moderatelyActive">Moderately Active</option>
              <option value="veryActive">Very Active</option>
              <option value="extraActive">Extra Active</option>
            </select>
          </label>
        </div>
        <div className='btn-container'>
          {
            !maintenanceCalories ?
            <button type="button" onClick={calculateMaintenanceCalories}>
              Calculate Maintenance Calories
            </button>
            : 
            <button type="button" onClick={calculateMaintenanceCalories}>
              Re-Calculate
            </button>
          }
            {
            maintenanceCalories && (
              <p>Here are your maintenance calories <br></br>based on your activity level: {maintenanceCalories.toFixed(0) || 0}</p>
            )}
        </div>
      </form>
    </div>
  )
}
export default Calculator
