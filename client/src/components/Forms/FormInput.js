export default function FormInput(props) {
  return (
    <div className='formInput'>
      <label>{props.label}</label>

      <input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        autoComplete='off'
      />

      <span>{props.error}</span>
    </div>
  );
}