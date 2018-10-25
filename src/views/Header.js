var m = require('mithril')

module.exports = {
	view: function (vnode) {
		return [m('header',
			m('nav.container',
				m('.row',
					m('.column',
						m('a.button[href="/list"]', { oncreate: m.route.link }, 'Movies')
					),
					m('.column',
						m('a.button[href="/"]', { oncreate: m.route.link }, 'Roger')
					),
					m('.column',
						m('a.button[href="/create"]', { oncreate: m.route.link }, 'Create')
					)
				)
			)
		),
		m('main', vnode.children)
		]
	}
}