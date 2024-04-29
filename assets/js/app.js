var curr_example = "ex-1";

function handleChange(event) {
  const exampleIDs = [
    `tokenizer-${curr_example}`,
    `morpheme-${curr_example}`,
    `tokenizer-${event.target.value}`,
    `morpheme-${event.target.value}`,
  ];
  
  for (const exampleID of exampleIDs) {
    const target = document.getElementById(exampleID);
    target.classList.toggle("d-none")
  }

  curr_example = event.target.value;
}

const example_selector = document.getElementById("select-example");
example_selector.addEventListener("change", handleChange)
example_selector.value = curr_example

console.log("Added change event listener.")

