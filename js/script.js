const goBlog = () => {
  window.location.href = "blog.html";
};

// hendleCategory
const hendleCategory = async () => {
  const resposne = await fetch(
    `https://openapi.programming-hero.com/api/videos/categories`
  );
  const data = await resposne.json();
  const categorys = data.data;
  hendleCategoryBtn(categorys);
};

// hendleCategoryBtn
const hendleCategoryBtn = (categories) => {
  const btnContainer = document.getElementById("btn-container");
  categories.forEach((category) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <button class="btn bg-btn text-heading" onclick="hendleLoadData('${category.category_id}')">${category.category}</button>
      `;
    btnContainer.appendChild(div);
  });
};

const hendleLoadData = async (id) => {
  const resposne = await fetch(
    `https://openapi.programming-hero.com/api/videos/category/${id}`
  );
  const data = await resposne.json();
  const categoryDatas = data.data;
  const cardContainer = document.getElementById("card-container");
  if (!categoryDatas.length) {
    cardContainer.innerHTML = `
      <div class="space-y-5 mx-auto w-[90vw] mt-10">
      <img src="./images/Icon.png" alt="" class="mx-auto">
      <h1 class="md:text-4xl text-2xl font-semibold text-center">Oops!! Sorry, There is no <br> content here</h1>
  </div>
      `;
  } else {
    cardContainer.innerHTML = "";
    categoryDatas.forEach((data) => {
      const postedDate = convartSec(data.others.posted_date);
      const div = document.createElement("div");
      div.innerHTML = `
        <div class ="relative">
        <figure><img src=${data.thumbnail} alt="loading..." class="w-full max-h-[240px] md:max-h-[190px] lg:max-h-[240px] rounded-lg"/>
  </figure>
  <p  class="absolute bottom-0 right-0 px-2 py-1 text-white rounded bg-title">${postedDate}</p>
    </div>
        <div class="flex gap-4 mt-5">
            <div class="w-12 h-12">
                <img src=${data.authors[0].profile_picture}" alt="" class="object-cover w-full h-full rounded-full">
            </div>
            <div class="space-y-1">
                <h2 class="card-title">${data.title}</h2>
                <div class="flex gap-2">
                <p>${data.authors[0].profile_name}</p> 
            </div>
                <p>${data.others.views}</p>
            </div>
        </div>
        `;
      cardContainer.appendChild(div);
    });
  }
};

const convartSec = (sec) => {
  if (sec) {
    const hr = parseInt(sec / 3600);
    const min = parseInt(sec / 60 - hr * 60);
    const sentence = ` ${hr}hrs ${min} min ago`;
    return sentence;
  }
  return "";
};
hendleCategory();

hendleLoadData("1000");
