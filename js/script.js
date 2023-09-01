const hendleCategory = async () => {
  const resposne = await fetch(
    `https://openapi.programming-hero.com/api/videos/categories`
  );
  //   console.log(resposne);
  const data = await resposne.json();
  //   console.log(data);
  const categorys = data.data;
  console.log(categorys);
  hendleCategoryBtn(categorys);
};

const hendleCategoryBtn = (categories) => {
  const btnContainer = document.getElementById("btn-container");
  categories.forEach((category) => {
    const button = document.createElement("button");
    button.classList.add("btn", "bg-btn", "text-heading");
    button.innerText = category.category;
    btnContainer.appendChild(button);
  });
};
hendleCategory();
