/**
 * Parabox-material callout style
 *
 * Syntax:
 *   {% callout [.type] [title] %}
 *   Callout content
 *   {% endcallout %}
 */

hexo.extend.tag.register('callout', (args, content) => {
    let arg0 = args[0];
    let calloutType = 'note';
    let title = '';
    let titleHtml = '';

    if (arg0 && arg0.startsWith('.')) {
        calloutType = arg0.substr(1);
        title = args.splice(1).join(' ');
    } else {
        title = args.join(' ');
    }

    if (title) {
        titleHtml = `<div class="callout-title">${title}</div>`;
    }

    return `<div class="callout callout-${calloutType}">
                ${titleHtml}
                ${hexo.render.renderSync({text: content, engine: 'markdown'})}
            </div>`;
}, true);
