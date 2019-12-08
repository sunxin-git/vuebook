// @returns {VNode}
createElement(
	// -----------------第一个参数，必填项-----------------
  // {String | Object | Function}
  // 一个HTML标签名、组件选项对象，或者
  // 解析上述任何一种的一个async函数。
  'div',

	// -----------------第二个参数，可选-----------------
  // {Object}
  // 一个与模板中属性对应的数据对象。
  {
    // 与v-bind:class一样的API，
	  // 接受一个字符串、对象或字符串和对象的数组
	  'class': {
	    foo: true,
	    bar: false
	  },
	  // 与v-bind:style一样的API，
	  // 接受一个字符串、对象，或对象数组
	  style: {
	    color: 'red',
	    fontSize: '14px'
	  },
	  // 普通的HTML属性
	  attrs: {
	    id: 'foo'
	  },
	  // 组件prop
	  props: {
	    myProp: 'bar'
	  },
	  // DOM属性
	  domProps: {
	    innerHTML: 'baz'
	  },
	  // 在'on'属性内的事件监听器，
	  // 但不支持如 'v-on:keyup.enter' 这样的修饰符，
	  // 需要在处理函数中手动检查 keyCode。
	  on: {
	    click: this.clickHandler
	  },
	  // 仅用于组件，用于监听原生事件，
	  //而不是组件内部使用vm.$emit触发的自定义事件。
	  nativeOn: {
	    click: this.nativeClickHandler
	  },
	  // 自定义指令。注意，不能对binding中的oldValue赋值，
	  // 因为Vue会替你跟踪它。
	  directives: [
	    {
	      name: 'my-custom-directive',
	      value: '2',
	      expression: '1 + 1',
	      arg: 'foo',
	      modifiers: {
	        bar: true
	      }
	    }
	  ],
	  // 作用域插槽的格式为
	  // { name: props => VNode | Array<VNode> }
	  scopedSlots: {
	    default: props => createElement('span', props.text)
	  },
	  // 如果组件是其它组件的子组件，需为插槽指定名称
	  slot: 'name-of-slot',
	  // 其它特殊顶层属性
	  key: 'myKey',
	  ref: 'myRef',
	  // 如果在render函数中给多个元素都应用了相同的ref名，
	  // 那么 $refs.myRef 会变成一个数组。
	  refInFor: true
	},

	// -----------------第三个参数，可选-----------------
  // {String | Array}
  // 子虚拟节点 (VNodes)，由createElement()构建而成，
  // 也可以使用字符串来生成“文本虚拟节点”。
  [
    '先写一些文本',
    createElement('h1', '一则头条'),
    createElement(MyComponent, {
      props: {
        someProp: 'foobar'
      }
    })
  ]
)