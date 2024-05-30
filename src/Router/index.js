import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../Components/index';
import LandingPage1440 from '../Components/LandingPage1440';
import LandingPage1024 from '../Components/LandingPage1024';
import ElementCardPricingCardTopBoxOptionsPriceOnlyDefault from '../Components/ElementCardPricingCardTopBoxOptionsPriceOnlyDefault';
import ElementCardPricingCardTopBoxOptionsPriceSubtitleDefault from '../Components/ElementCardPricingCardTopBoxOptionsPriceSubtitleDefault';
import ElementCardPricingCardTopBoxOptionsPriceSubtitleHover from '../Components/ElementCardPricingCardTopBoxOptionsPriceSubtitleHover';
import ElementCardPricingCardTopBoxOptionsPriceOnlyHover from '../Components/ElementCardPricingCardTopBoxOptionsPriceOnlyHover';
import ElementCardFAQBasicMedium1LineTitle from '../Components/ElementCardFAQBasicMedium1LineTitle';
import ElementCardFAQBasicMedium2LineTitle from '../Components/ElementCardFAQBasicMedium2LineTitle';
const RouterDOM = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/"><HomePage /></Route>
				<Route exact path="/landingpage1440"><LandingPage1440 /></Route>
				<Route exact path="/landingpage1024"><LandingPage1024 /></Route>
				<Route exact path="/elementcardpricingcardtopboxoptionspriceonlydefault"><ElementCardPricingCardTopBoxOptionsPriceOnlyDefault /></Route>
				<Route exact path="/elementcardpricingcardtopboxoptionspricesubtitledefault"><ElementCardPricingCardTopBoxOptionsPriceSubtitleDefault /></Route>
				<Route exact path="/elementcardpricingcardtopboxoptionspricesubtitlehover"><ElementCardPricingCardTopBoxOptionsPriceSubtitleHover /></Route>
				<Route exact path="/elementcardpricingcardtopboxoptionspriceonlyhover"><ElementCardPricingCardTopBoxOptionsPriceOnlyHover /></Route>
				<Route exact path="/elementcardfaqbasicmedium1linetitle"><ElementCardFAQBasicMedium1LineTitle /></Route>
				<Route exact path="/elementcardfaqbasicmedium2linetitle"><ElementCardFAQBasicMedium2LineTitle /></Route>
			</Switch>
		</Router>
	);
}
export default RouterDOM;