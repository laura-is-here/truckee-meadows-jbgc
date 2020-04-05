module.exports = (content, icon, link) => {
  return `
<div>
	<span class="iconify inline-block" data-icon="fa:${icon}"></span>
	<a href="${link}" rel="noopener noreferer" target="_blank">${content}</a>
</div>
<br clear="all" />
`;
};
