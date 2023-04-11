import AvatarSelectionForm from "./AvatarSelectionForm";

export const LoginForm = ({ onSubmit, onNameChange, name }) => {
    return (
      <form onSubmit={onSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={onNameChange} />
        </label>
        <br />
        <AvatarSelectionForm />
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  };  