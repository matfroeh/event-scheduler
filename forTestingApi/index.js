const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  try {
    e.preventDefault();
    // Get values from the form
    const {
      loginCheckBox: { checked: loginChecked },
      email: { value: emailValue },
      password: { value: passwordValue },
    } = form.elements;

    console.log(loginChecked);
    

    // Request
    if (loginChecked) {
      const response = await fetch("http://localhost:3001/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: emailValue,
          password: passwordValue,
        }),
      });

      if (!response) {
        const { error } = await response.json();
        throw new Error(error);
      }

      // Get the login response body
      const user = await response.json();
      console.log(user);

    } else {
      const response = await fetch("http://localhost:3001/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: emailValue,
          password: passwordValue,
        }),
      });

      if (!response) {
        const { error } = await response.json();
        throw new Error(error);
      }

      // Get the registration response body
      const user = await response.json();
      console.log(user);
    }
  } catch (error) {
    console.error(error);
  }
});
