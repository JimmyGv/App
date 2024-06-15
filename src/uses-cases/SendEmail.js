const HandleOpenGmail = () => {
    const recipient = "tmp_jgonzalez@accitesz.com";
    const subject = "Recovery password";
    const body = "Hello I'd like to recovery my password\n\n" +
      "My email to enter the app is this one\n\n" +
      "Could you please help me with a temporal password?";
    
    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    Linking.openURL(mailtoUrl);
  };

export default HandleOpenGmail;
