import { ReactComponent as Facebook } from '../../img/facebook.svg';
import { ReactComponent as Instagram } from '../../img/instagram.svg';
import { ReactComponent as Call } from '../../img/contact/call.svg';
import { ReactComponent as Map } from '../../img/contact/map.svg';
import { ReactComponent as Mail } from '../../img/contact/sms.svg';

import ArrowRightIcon from '../../img/arrow-right.svg';
import {
  Button,
  ButtonWrapper,
  ContactContainer,
  ContactList,
  ContactListItem,
  ContactListTitle,
  ContactRow,
  ContactRowSocial,
  ContactUsSection,
  ContactUsTitle,
  ErrorSpan,
  Form,
  Input,
  Label,
  Textarea,
} from './ContactUs.styled';
import { useState } from 'react';

import * as Yup from 'yup';
const schema = Yup.object().shape({
  name: Yup.string().required('Please enter your full name'),
  email: Yup.string()
    .email('Please enter a valid email address')
    .required('Email is required'),
  phone: Yup.string()
    .matches(/^\d{10}$/, 'Please enter a valid phone number')
    .required('Phone number is required'),
  message: Yup.string().required('Message is required'),
});

function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const handleChange = event => {
    const { name, value } = event.target;

    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: undefined,
    }));

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      case 'message':
        setMessage(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      await schema.validate(
        { name, email, phone, message },
        { abortEarly: false }
      );
      console.log(
        'Full name:',
        name,
        'E-mail:',
        email,
        'Phone:',
        phone,
        'Message:',
        message
      );
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      setErrors({});
    } catch (err) {
      const validationErrors = {};
      err.inner.forEach(error => {
        validationErrors[error.path] = error.message;
      });
      setErrors(validationErrors);
    }
  };

  return (
    <ContactUsSection id="contactUs">
      <ContactUsTitle>Contact us</ContactUsTitle>

      <ContactContainer>
        <ContactList>
          <ContactListItem>
            <ContactListTitle>Phone:</ContactListTitle>
            <ContactRow>
              <Call />
              <a target="_blank" rel="noreferrer" href="tel:+380981234567">
                38 (098) 12 34 567
              </a>
            </ContactRow>
            <ContactRow>
              <Call />
              <a target="_blank" rel="noreferrer" href="tel:+380931234567">
                38 (093) 12 34 567
              </a>
            </ContactRow>
          </ContactListItem>
          <ContactListItem>
            <ContactListTitle>E-mail:</ContactListTitle>
            <ContactRow>
              <Mail />
              <a
                target="_blank"
                rel="noreferrer"
                href="mailto:office@ecosolution.com"
              >
                office@ecosolution.com
              </a>
            </ContactRow>
          </ContactListItem>
          <ContactListItem>
            <ContactListTitle>Address:</ContactListTitle>
            <ContactRow>
              <Map />
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.google.com/maps/place/%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%A8%D0%BE%D1%82%D0%B0+%D0%A0%D1%83%D1%81%D1%82%D0%B0%D0%B2%D0%B5%D0%BB%D1%96,+7,+%D0%9B%D1%8C%D0%B2%D1%96%D0%B2,+%D0%9B%D1%8C%D0%B2%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+79000/data=!4m2!3m1!1s0x473add6785a9dce5:0x92b4b3ec68e99c14?sa=X&ved=2ahUKEwj8oun6s-6CAxXAQPEDHeG8CWYQ8gF6BAgQEAA"
              >
                79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
              </a>
            </ContactRow>
          </ContactListItem>
          <ContactListItem>
            <ContactListTitle>Social Networks:</ContactListTitle>
            <ContactRowSocial>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/"
              >
                <Facebook />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/"
              >
                <Instagram />
              </a>
            </ContactRowSocial>
          </ContactListItem>
        </ContactList>
        <Form onSubmit={handleSubmit}>
          <Label>
            * Full name:
            <Input
              type="text"
              name="name"
              placeholder="John Rosie"
              value={name}
              onChange={handleChange}
              $hasError={!!errors.name}
            />
            {errors.name && <ErrorSpan>{errors.name}</ErrorSpan>}
          </Label>
          <Label>
            * E-mail:
            <Input
              type="email"
              name="email"
              placeholder="johnrosie@gmail.com"
              value={email}
              onChange={handleChange}
              $hasError={!!errors.email}
            />
            {errors.email && <ErrorSpan>{errors.email}</ErrorSpan>}
          </Label>
          <Label>
            * Phone:
            <Input
              type="phone"
              name="phone"
              placeholder="380961234567"
              value={phone}
              onChange={handleChange}
              $hasError={!!errors.phone}
            />
            {errors.phone && <ErrorSpan>{errors.phone}</ErrorSpan>}
          </Label>
          <Label>
            Message:
            <Textarea
              type="text"
              name="message"
              placeholder="My message...."
              value={message}
              onChange={handleChange}
              $hasError={!!errors.message}
            />
            {errors.message && <ErrorSpan>{errors.message}</ErrorSpan>}
          </Label>
          <ButtonWrapper>
            <Button type="submit">
              Send
              <div>
                <img src={ArrowRightIcon} alt="arrow right icon" />
              </div>
            </Button>
          </ButtonWrapper>
        </Form>
      </ContactContainer>
    </ContactUsSection>
  );
}

export default ContactUs;
