import {Component} from 'react'
import {Switch, Route, Redirect, BrowserRouter} from 'react-router-dom'
import SpotifyContext from './context/SpotifyContext'

import ProtectedRoute from './components/ProtectedRoute'
import LoginRoute from './components/LoginRoute'
import HomeRoute from './components/HomeRoute'
import PlayListItem from './components/PlayListItem'
import CategoryItem from './components/CategoryItem'
import NewReleasesItem from './components/NewReleasesItem'
import PageNotFound from './components/PageNotFound'

import './App.css'

class App extends Component {
  state = {
    footerDetails: '',
    playBtnStatus: true,
    volumeMuteStatus: true,
    selectedTrackId: '',
  }

  onClickTrack = id => {
    this.setState({selectedTrackId: id})
  }

  currentTrackDetails = items => {
    this.setState({footerDetails: items})
  }

  onClickPlayButton = () => {
    this.setState(prevState => ({playBtnStatus: !prevState.playBtnStatus}))
  }

  onClickMuteButton = () => {
    this.setState(prevState => ({
      volumeMuteStatus: !prevState.volumeMuteStatus,
    }))
  }

  render() {
    const {
      footerDetails,
      playBtnStatus,
      volumeMuteStatus,
      selectedTrackId,
    } = this.state
    console.log('app-footer', footerDetails)

    return (
      <SpotifyContext.Provider
        value={{
          currentTrackDetails: this.currentTrackDetails,
          onClickPlayButton: this.onClickPlayButton,
          onClickMuteButton: this.onClickMuteButton,
          onClickTrack: this.onClickTrack,
          selectedTrackId,
          footerDetails,
          playBtnStatus,
          volumeMuteStatus,
        }}
      >
        <BrowserRouter>
          <Switch>
            <Route exact path="/login" component={LoginRoute} />
            <ProtectedRoute exact path="/" component={HomeRoute} />
            <ProtectedRoute
              exact
              path="/playlists-details/:id"
              component={PlayListItem}
            />
            <ProtectedRoute
              exact
              path="/category-playlists/:id"
              component={CategoryItem}
            />
            <ProtectedRoute
              exact
              path="/album-details/:id"
              component={NewReleasesItem}
            />
            <Route path="/not-found" component={PageNotFound} />
            <Redirect to="not-found" />
          </Switch>
        </BrowserRouter>
      </SpotifyContext.Provider>
    )
  }
}

export default App
