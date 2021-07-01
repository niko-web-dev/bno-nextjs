import { FC, Fragment, useState } from 'react'
import style from './cardForm.module.scss'

const CardForm: FC<{}> = ({ }) => {

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('telegram');

  const submitForm = (e) => {
    e.preventDefault();
    let data = {
      'name': name,
      'phone': phone,
      'email': email,
      'contact': contact
    }
    console.log(data)
  }
  const changeName = function(event){
    setName(event.target.value)
  }
  const changePhone = function(event){
    setPhone(event.target.value)
  }
  const changeEmail = function(event){
    setEmail(event.target.value)
  }
  const handleContact = (event) => {
    event.preventDefault();
    setContact(event.target.value)
  }
    return (
        <form className={style.cardForm} >
          <h2 className={style.cardForm__title}>
            ВАШИ ДАННЫЕ
          </h2>

          <div className={style.cardForm__inputBlock}>
            <label className={style.cardForm__label} htmlFor="name">Имя</label>
            <input className={style.cardForm__input}
                   id='name'
                   onChange={changeName}
                   value={name}
                   type="text"/>
          </div>
          <div className={style.cardForm__inputBlock}>
            <label className={style.cardForm__label} htmlFor="tel">Телефон</label>
            <input className={style.cardForm__input}
                   onChange={changePhone}
                   value={phone}
                   id='tel'
                   type="tel"/>
          </div>
          <div className={style.cardForm__inputBlock}>
            <label className={style.cardForm__label} htmlFor="email">E-mail</label>
            <input className={style.cardForm__input}
                   onChange={changeEmail}
                   value={email}
                   id='email'
                   type="email"/>
          </div>

          <p className={style.cardForm__callText}>Предпочитаемый способ связи</p>

          <div className={style.cardForm__contacts}>
            <label
              className={[contact === 'telegram' ? style.cardForm__contactsLabelActive : null, style.cardForm__contactsLabel, style.cardForm__contactsLabelTelegram].join(' ')} >
              <input className={style.cardForm__contactsRadio}
                     onClick={handleContact}
                     value="telegram"
                     name="contact"
                     type="radio"/>
            </label>
            <label
              className={[contact === 'whatsup' ? style.cardForm__contactsLabelActive : null, style.cardForm__contactsLabel, style.cardForm__contactsLabelWhatsup].join(' ')} >
              <input className={style.cardForm__contactsRadio}
                     onClick={handleContact}
                     value="whatsup"
                     name="contact"
                     type="radio"/>
            </label>
            <label
              className={[contact === 'phone' ? style.cardForm__contactsLabelActive : null, style.cardForm__contactsLabel, style.cardForm__contactsLabelPhone].join(' ')} >
              <input className={style.cardForm__contactsRadio}
                     onClick={handleContact}
                     value="phone"
                     name="contact"
                     type="radio"/>
            </label>
            <label
              className={[contact === 'mail' ? style.cardForm__contactsLabelActive : null, style.cardForm__contactsLabel, style.cardForm__contactsLabelMail].join(' ')} >
              <input className={style.cardForm__contactsRadio}
                     onClick={handleContact}
                     value="mail"
                     name="contact"
                     type="radio"/>
            </label>
          </div>

          <button className={style.cardForm__button} onClick={submitForm}>
            ЗАВЕРШИТЬ ОФОРМЛЕНИЕ
          </button>
        </form>
    )

}



export default CardForm