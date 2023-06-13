import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

const PeksuBlogPost = function ({ html, state: { attrs, store } }) {
  /*
  const todoId = attrs["todo-id"];
  const completed = typeof attrs.completed === "string";
  const myHtml: EnhanceHtmlFn = html;
  */

  console.log("STORE", store);

  return html`
    <style>
      h2 {
        color: magenta;
      }
    </style>
    <section>
      <h2>${store.post.title}</h2>

      ${documentToHtmlString(store.post.content.json)}
    </section>
  `;
};

export default PeksuBlogPost;
