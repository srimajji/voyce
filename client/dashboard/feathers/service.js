
// Customise processing in feathers/index.js for your app

// See feathers-reduxify-services::default
export const mapServicePathsToNames = {
	'/api/feedbacks': 'feedbacks',
	'/api/logs': 'logs'
};

// See feathers-reduxify-services::getServicesStatus. Order highest priority msg first.
export const prioritizedListServices = ['feedbacks', 'logs'];
