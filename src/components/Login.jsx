import React, { createContext, useState } from 'react';
import '../styles/Login.css';
import { LoginForm } from './LogInForm';
import { MessagesPage } from './MessagesPage';

export const AvatarContext = createContext(null);

const Login = () => {
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(true);

  const avatars= [
    'https://playplex.mtvnimages.com/uri/mgid:arc:content:southpark.intl:192d2362-9f29-11ec-a4f1-70df2f866ace?stage=staging&ep=shared.southpark.global',
    'https://cdn.shopify.com/s/files/1/0170/5859/4880/products/SP-Cartman-Stand-40_1024x1024.jpg?v=1618604102',
    'https://cdn.shopify.com/s/files/1/0170/5859/4880/products/SP-Stan-Stand-28_800x.jpg?v=1618604109',
    'https://static.displate.com/857x1200/displate/2022-01-17/4bfda3717d630d4c0c81cb783b7aa22c_2e564f89107005d64c61abe60fec7b8e.jpg'
  ];

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleAvatarSelect = (avatarUrl) => {
    setAvatar(avatarUrl);
  }

  const handleRandomAvatar = () => {
    const randomIndex = Math.floor(Math.random() * avatars.length);
    setAvatar(avatars[randomIndex]);
  }

  const handleSubmit = (e) => {
    if(name === '' || avatar === null) {
      alert('Please enter your name or choose your avatar');
    } else {
      setFormSubmitted(true);
      setShowLoginForm(false);
    }
    e.preventDefault(); 
    console.log('Name:', name);
    console.log('Avatar:', avatar);
  }

  return (
    <div className='container'>
      <AvatarContext.Provider value={{ avatars, avatar, handleAvatarSelect, handleRandomAvatar }}>
        {showLoginForm && <LoginForm onSubmit={handleSubmit} onNameChange={handleNameChange} name={name} />}
        {formSubmitted && <MessagesPage name={name} /> }
      </AvatarContext.Provider>
    </div>
  );
}

export default Login;
