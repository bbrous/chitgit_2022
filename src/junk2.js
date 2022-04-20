Yup.object().shape({
  aCheckbox: Yup.boolean('Select this checkbox a please'),
  bCheckbox: Yup.boolean('Select this checkbox b please'),
  anotherField: Yup.string().when(["aCheckbox", "bCheckbox"], {
      is: (aCheckbox, bCheckbox) => aCheckbox === true && bCheckbox === true,
      then: Yup.string().required('I am required now that both checkboxes are checked')
  })
});
