import { blogPostUrl } from "../../services/url.mjs";

const PeksuHeadlines = function ({ html, state: { attrs, store } }) {
  /*
  const todoId = attrs["todo-id"];
  const completed = typeof attrs.completed === "string";
  const myHtml: EnhanceHtmlFn = html;
  */

  const kakka = attrs["kakka"];

  return html`
    <style>
      h2 {
        color: magenta;
      }
    </style>
    <section>
      kökkö
      <h2>${kakka}</h2>

      ${JSON.stringify}
      <ul>
        ${store.headlines.blogPostCollection.items
          .map((item) => {
            return `<li><a href="${blogPostUrl(item)}">${item.title}</a></li>`;
          })
          .join("")}
      </ul>
    </section>
  `;
};

export default PeksuHeadlines;
