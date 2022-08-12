const buildHTML = (XHR) => {
  const item = XHR.response.post;
  const html = `
    <div class="post">
      <div class="post-date">
        投稿日時：${item.created_at}
      </div>
      <div class="post-content">
        ${item.content}
      </div>
    </div>`;
  return html;
};

function post (){
  // console.log("イベント発火")
  const submit = document.getElementById("submit");
  submit.addEventListener("click", (e) => {
    // console.log("イベント発火");
    e.preventDefault();
    const form = document.getElementById("form");
    const formData = new FormData(form);
    const XHR = new XMLHttpRequest();
    XHR.open("POST", "/posts", true);
    // XHR.open("POST", "/post", true);
    XHR.responseType = "json";
    XHR.send(formData);
    XHR.onload = () => {
      // console.log(XHR.response)
      if (XHR.status != 200) {
        alert(`Error ${XHR.status}: ${XHR.statusText}`);
        return null;
      };

      const list = document.getElementById("list");
      const formText = document.getElementById("content");
      // console.log(formText.value);
      list.insertAdjacentHTML("afterend", buildHTML(XHR));
      formText.value = "";

    };
  });
};

window.addEventListener('load', post);


