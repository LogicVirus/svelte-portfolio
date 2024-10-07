import{A as o}from"./UIcon.2afc9138.js";const u=`# Svelte

---

[\`Svelte\`](https://svelte.dev/) is a free and open-source front end component framework or language created by Rich Harris and maintained by the Svelte core team members. Svelte is not a monolithic JavaScript library imported by applications: instead, Svelte compiles HTML templates to specialized code that manipulates the DOM directly, which may reduce the size of transferred files and give better client performance. Application code is also processed by the compiler, inserting calls to automatically recompute data and re-render UI elements when the data they depend on is modified. This also avoids the overhead associated with runtime intermediate representations, such as virtual DOM, unlike traditional frameworks (such as React and Vue) which carry out the bulk of their work at runtime, i.e. in the browser.

The compiler itself is written in TypeScript. Its source code is licensed under MIT License and hosted on GitHub.

<br/>

Svelte is :

- compiled : Svelte shifts as much work as possible out of the browser and into your build step. No more manual optimisations — just faster, more efficient apps.
- compact : Write breathtakingly concise components using languages you already know — HTML, CSS and JavaScript. Oh, and your application bundles will be tiny as well.
- complete : Built-in scoped styling, state management, motion primitives, form bindings and more — don't waste time trawling npm for the bare essentials. It's all here.

<br/>

## Example

\`\`\`ts
<script>
    let count = 1;
    $: doubled = count * 2;
<\/script>

<p>{count} * 2 = {doubled}</p>

<button on:click={() => count = count + 1}>Count</button>
\`\`\`

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

> Svelte is a free and open-source front end component framework or language created by Rich Harris and maintained by the Svelte core team members.
`;function p(e,...a){const n=Object.assign({},e);return Object.keys(n).forEach(s=>{a.includes(s)&&delete n[s]}),n}const t=e=>e,d=[t({name:"Programming Languages",slug:"pro-lang"}),t({name:"Frameworks",slug:"framework"}),t({name:"Libraries",slug:"library"}),t({name:"Languages",slug:"lang"}),t({name:"Databases",slug:"db"}),t({name:"ORMs",slug:"orm"}),t({name:"DevOps",slug:"devops"}),t({name:"Testing",slug:"test"}),t({name:"Dev Tools",slug:"devtools"}),t({name:"Markup & Style",slug:"markup-style"}),t({name:"Design",slug:"design"}),t({name:"Soft Skills",slug:"soft"})],r=e=>{const a=p(e,"category");return e.category&&(a.category=d.find(n=>n.slug===e.category)),a},c=[r({slug:"js",color:"yellow",description:"JavaScript is a versatile, high-level programming language primarily used for interactive and dynamic web content.",logo:o.JavaScript,name:"JavaScript",category:"pro-lang"}),r({slug:"ts",color:"blue",description:"TypeScript is a superset of JavaScript that adds static typing, making it ideal for large-scale application development.",logo:o.TypeScript,name:"TypeScript",category:"pro-lang"}),r({slug:"css",color:"blue",description:"CSS is used to style and layout web pages, bringing visual aesthetics and responsive design to HTML content.",logo:o.CSS,name:"CSS",category:"markup-style"}),r({slug:"html",color:"orange",description:"HTML is the standard markup language for creating the structure of web pages.",logo:o.HTML,name:"HTML",category:"markup-style"}),r({slug:"sass",color:"pink",description:"Sass is a preprocessor scripting language that extends CSS with features like variables, nested rules, and mixins.",logo:o.Sass,name:"Sass",category:"markup-style"}),r({slug:"reactjs",color:"cyan",description:"React is a popular JavaScript library for building user interfaces, particularly single-page applications.",logo:o.ReactJs,name:"React Js",category:"library"}),r({slug:"svelte",color:"orange",description:u,logo:o.Svelte,name:"Svelte",category:"library"})],y="Skills",h=(...e)=>c.filter(a=>e.includes(a.slug)),f=e=>{const a=[],n=[];return c.forEach(s=>{if(e.trim()&&!s.name.toLowerCase().includes(e.trim().toLowerCase()))return;if(!s.category){n.push(s);return}let i=a.find(g=>{var l;return g.category.slug===((l=s.category)==null?void 0:l.slug)});i||(i={items:[],category:s.category},a.push(i)),i.items.push(s)}),n.length!==0&&a.push({category:{name:"Others",slug:"others"},items:n}),a};export{f as a,h as g,c as i,y as t};
