module.exports = (content, icon, link) => {
  return `
<p style="clear:both">
<span class="iconify inline-block" data-icon="fa:${icon}"></span>
<a href="${link}" rel="noopener noreferer" target="_blank">
${content}
</a>
</p>
`;
};
