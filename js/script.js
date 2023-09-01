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
    // const categoryId = category.category_id;
    // console.log(categoryId);
    const div = document.createElement("div");
    div.innerHTML = `
    <button class="btn bg-btn text-heading" onclick="hendleLoadData('${category.category_id}')">${category.category}</button>
    `;
    // button.classList.add("btn", "bg-btn", "text-heading");
    // button.innerText = category.category;
    // button.setAttribute("onclick", "hendleLoadData(`${categoryId}`)");
    btnContainer.appendChild(div);
  });
};

const hendleLoadData = async (id) => {
  const resposne = await fetch(
    `https://openapi.programming-hero.com/api/videos/category/${id}`
  );
  const data = await resposne.json();
  const categoryDatas = data.data;
  //   console.log(categoryDatas);
  const cardContainer = document.getElementById("card-container");
  if (!categoryDatas.length) {
    // cardContainer.removeAttribute("class");
    cardContainer.innerHTML = `
    <div class="space-y-5 mx-auto w-[90vw]">
    <img src="./images/Icon.png" alt="" class="mx-auto">
    <h1 class="md:text-4xl text-2xl font-semibold text-center">Oops!! Sorry, There is no <br> content here</h1>
</div>
    `;
  } else {
    // cardContainer.setAttribute(
    //   "class",
    //   "grid grid-cols-1, gap-8 md:grid-cols-2,lg:grid-cols-4"
    // );
    cardContainer.innerHTML = "";
    categoryDatas.forEach((data) => {
      const div = document.createElement("div");
      div.classList.add("bg-base-100");
      div.innerHTML = `
      <figure><img src=${data.thumbnail} alt="loading..." class="w-full max-h-[240px] md:max-h-[190px] lg:max-h-[240px] rounded-lg"/>
      </figure>
      <div class="flex gap-4 mt-5">
          <div class="w-12 h-12">
              <img src=${data.authors[0].profile_picture}" alt="" class="object-cover w-full h-full rounded-full">
          </div>
          <div class="space-y-1">
              <h2 class="card-title">${data.title}</h2>
              <div class="flex gap-2">
              <p>${data.authors[0].profile_name}</p>
              <img src="./images/varified.svg" alt="">
          </div>
              <p>${data.others.views}</p>
          </div>
      </div>
      `;
      cardContainer.appendChild(div);
      // console.log(data);
    });
  }
};
hendleCategory();

hendleLoadData("1000");

/* const categoryId = category.category_id;
    console.log(categoryId);
    const button = document.createElement("button");
    button.classList.add("btn", "bg-btn", "text-heading");
    button.innerText = category.category;
    button.setAttribute("onclick", "hendleLoadData(`${categoryId}`)");
    btnContainer.appendChild(button); */

/*     "authors": [
        {
        "profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
        "profile_name": "Olivia Mitchell",
        "verified": ""
        }
        ], */
/* 
        "others": {
            "views": "100K",
            "posted_date": "16278"
            }
 */
