import { useContext } from 'react';
import '../styles/AvatarSelectionForm.css';
import { AvatarContext } from './Login';

const AvatarSelectionForm = () => {
  const { avatars, avatar, handleAvatarSelect, handleRandomAvatar } = useContext(AvatarContext);
    return (
      <div>
        <label>Avatar:</label>
        <br />
        <div className="avatar-option">
          {avatars.map((avatarUrl, index) => (
            <label key={index}>
              <input type="radio" value={avatarUrl} checked={avatar === avatarUrl} onChange={() => handleAvatarSelect(avatarUrl)} />
              <img src={avatarUrl} alt='user avatar' />
            </label>
          ))}
        </div>
        <br />
        <button type="button" onClick={handleRandomAvatar}>Random Avatar</button>
      </div>
    );
  };
  
  export default AvatarSelectionForm;
  