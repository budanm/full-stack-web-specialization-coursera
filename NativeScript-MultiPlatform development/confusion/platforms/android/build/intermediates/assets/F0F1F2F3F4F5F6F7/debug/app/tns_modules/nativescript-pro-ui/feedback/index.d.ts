export class RadFeedback {
	/**
	 * Initializes the Telerik feedback component with the required settings.
	 * @param apiKey Application key, used to identify the Telerik Platform account which will be used to store the Feedback data.
	 * @param serviceUri Service URI the address of the backend service providing the database infrastructure for the RadFeedback component.
	 * @param uid A unique identifier used to mark the feedback items sent from a given device. This identifier may be unique information about the currently logged user or the ID of the device. This identifier is extremely important as it is used to make feedback data sent by a particular user accessible only by them.
	 */
	public static init(apiKey: string, serviceUri: string, uid?: string): void;

	/**
	 * Present the feedback dialog.
	 */
	public static show(): void;
}