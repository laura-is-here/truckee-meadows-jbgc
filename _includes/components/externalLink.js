module.exports = (content, link) => {
  return `
<a href="${link}" rel="noopener noreferer" target="_blank">
${content}<sup class="iconify inline-block text-xs" data-icon="fa:external-link"></sup>
</a>
`;
};
