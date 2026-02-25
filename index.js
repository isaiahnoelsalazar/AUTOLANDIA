const modal = new ECModal({title:"Hello", content:"This is a modal!", buttonAmount:3, buttonLabels:["OK", "Cancel", "Close"]});
modal.setButtonAction(1, () => modal.setContent("You clicked OK!"));
modal.setButtonAction(2, () => modal.setContent("You clicked Cancel!"));
modal.setButtonAction(3, () => modal.hide());
modal.show();