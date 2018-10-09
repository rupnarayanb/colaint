
	class TopNav extends React.Component {
		state = { isHide: false };
		componentDidMount() {
			window.addEventListener('scroll', this.handleScrollToElement);
			
		}

		componentWillUnmount() {
			window.removeEventListener('scroll', this.handleScrollToElement);
			
		}

		handleScrollToElement(event) {
			
			if(window.pageYOffset> 200){
				
				//$('#sticky').show();
				
				 this.setState({ isHide: true });
			}else{
				this.setState({ isHide: false});
				//$('#sticky').hide();
			}
		}
		render(){
			const classHide = this.state.isHide ? 'hide' : '';
			return "test"
		}
    }
	ReactDOM.render(<TopNav/>, document.getElementById('sticky'));