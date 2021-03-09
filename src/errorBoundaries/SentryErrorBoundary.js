import * as Sentry from "@sentry/react";
import './SentryErrorBoundary.scss';
Sentry.init({
  dsn:process.env.SENTRY_DSN
});

export default function FallbackComponent() {
  return (
		<>
		<div className="notfound">
			<div>
				<p className="notfound__text">An error has occurred <br/>
				<small>please try again later..</small></p>
				<img className="notfound__image" src="/img/notfound.svg" alt=""/>
			</div>		
		</div>
	</>
	);
};

 export const myFallback = <FallbackComponent />;