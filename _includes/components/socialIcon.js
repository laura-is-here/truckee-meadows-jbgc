module.exports = (content, icon, link) => {
  return `
<p>
<span class="iconify inline-block" data-icon="fa:${icon}"></span>&nbsp;<a href="${link}" rel="noopener noreferer" target="_blank">
${content}</a>
</p>
`;
};
