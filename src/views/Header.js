var m = require('mithril')

module.exports = {
	view: function (vnode) {
		return m('header', [
			m('nav', [
				m('a.button[href="/list"]', { oncreate: m.route.link }, 'Movies'),
				m('a.button[href="/create"]', { oncreate: m.route.link }, 'Create'),
			]),
			m('section', vnode.children)
		])
	}
}