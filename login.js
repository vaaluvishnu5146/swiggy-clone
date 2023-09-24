var rules = {
  phoneNumber: {
    min: 10,
    max: 10,
    error: `Phone Number must be of Minimum 10 and Maximum 10 digits`,
    success: "Looks Good!",
  },
  password: {
    min: 10,
    max: 12,
    success: "Looks Good!",
    regex: "",
    error: `Password must be of Minimum 10 and Maximum 12 digits`,
  },
};

function handleInput(e) {
  const id = e.id;
  const rule = rules[id];

  console.log(id);

  switch (id) {
    case "phoneNumber":
      validateInput(e, rule);
      break;

    case "password":
      validateInput(e, rule);

    default:
      break;
  }
}

function validateInput(e, rule) {
  const feedbackContainer = e.nextElementSibling;
  // !regex.match(e.value)
  if (e.value.length < rule.min || e.value.length > rule.max) {
    e.classList = "form-control is-invalid";
    if (feedbackContainer) {
      feedbackContainer.classList = "";
      feedbackContainer.classList = "invalid-feedback";
      feedbackContainer.innerText = rule.error;
    }
  } else {
    e.classList = "form-control is-valid";
    if (feedbackContainer) {
      feedbackContainer.classList = "";
      feedbackContainer.classList = "valid-feedback";
      feedbackContainer.innerText = rule.success;
    }
  }
}
