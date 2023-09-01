/* document.getElementById("btn-blog").addEventListener(`onclick`, () => {
  window.location.href = "blog.html";
  console.log("clicked");
}); */
const goBlog = () => {
  window.location.href = "blog.html";
};
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
    <div class="space-y-5 mx-auto w-[90vw] mt-10">
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
      const postedDate = data.others.posted_date;
      const postedDateHour = parseInt(postedDate / 3600);
      console.log(postedDateHour);
      const div = document.createElement("div");
      // div.classList.add("bg-base-100");
      div.innerHTML = `
      <div class ="relative">
      <figure><img src=${data.thumbnail} alt="loading..." class="w-full max-h-[240px] md:max-h-[190px] lg:max-h-[240px] rounded-lg"/>
</figure>
<p id="uplodeTime" class=""absolute bottom-0 right-0 text-white rounded bg-title px-2">${postedDateHour} hour ago</p>
  </div>
      <div class="flex gap-4 mt-5">
          <div class="w-12 h-12">
              <img src=${data.authors[0].profile_picture}" alt="" class="object-cover w-full h-full rounded-full">
          </div>
          <div class="space-y-1">
              <h2 class="card-title">${data.title}</h2>
              <div class="flex gap-2">
              <p>${data.authors[0].profile_name}</p>
              <span><img src="" alt="" id="varified" ></span>
          </div>
              <p>${data.others.views}</p>
          </div>
      </div>
      `;
      cardContainer.appendChild(div);
      // console.log(data);
      //   const varified = data.authors[0].verified;
      //   const varified = data.authors[0].profile_name;
      //   console.log(varified);
      const varified = document.getElementById("varified");
      // if (data?.authors[0]?.verified === "") {
      //   varified.innerHTML = `
      //   <img src="./images/varified.svg" alt="" >
      //   `;
      // } else {
      //   varified.innerHTML = "";
      // }
      const uplodeTime = document.getElementById("uplodeTime");
      // setDate(postedDateHour);
      // data?.authors[0]?.verified
      //   ? varified.setAttribute("src", "./images/varified.svg")
      //   : varified.removeAttribute("src");
    });
  }
};

// const setDate = (postedDateHour) => {
//   if (postedDateHour) {
//     uplodeTime?.classList?.add(
//       "absolute",
//       "bottom-0",
//       "right-0",
//       "text-white",
//       "rounded",
//       "bg-title",
//       "px-2"
//     );
//     uplodeTime.innerText = `
//     ${postedDateHour} hour ago
//     `;
//   } else {
//     uplodeTime.innerText = "";
//   }
// };
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

/* 
            const varified = document.getElementById("varified");
            if (data.authors[0].verified == "") {
              varified.innerHTML = `
              <img src="./images/varified.svg" alt="" >
              `;
            } else {
              varified.innerHTML = "";
            } */

/* 
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
    <div class="space-y-5 mx-auto w-[90vw] mt-10">
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
              <span><img src="" alt="" id="varified" ></span>
          </div>
              <p>${data.others.views}</p>
          </div>
      </div>
      `;
      cardContainer.appendChild(div);
      // console.log(data);
      //   const varified = data.authors[0].verified;
      //   const varified = data.authors[0].profile_name;
      //   console.log(varified);
      const varified = document.getElementById("varified");
      // if (data?.authors[0]?.verified === "") {
      //   varified.innerHTML = `
      //   <img src="./images/varified.svg" alt="" >
      //   `;
      // } else {
      //   varified.innerHTML = "";
      // }
      data?.authors[0]?.verified
        ? varified.setAttribute("src", "./images/varified.svg")
        : varified.removeAttribute("src");
    });
  }
};
            */
