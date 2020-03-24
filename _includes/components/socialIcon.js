module.exports = (content, icon, link) => {
  return `
<p>
<a href="${link} rel="noopener noreferer" target="_blank">
<span class="iconify inline-block" data-icon="fa:${icon}"></span>
${content}
</a>
</p>
`;
};
