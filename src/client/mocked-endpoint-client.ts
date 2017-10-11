import { MockedEndpointData, MockedEndpoint, Request } from "../types";

export class MockedEndpointClient implements MockedEndpoint {

    public constructor(
        public readonly id: string,
        private getMockedEndpointData: () => Promise<MockedEndpointData | null>
    ) { }

    public async getSeenRequests(): Promise<Request[]> {
        const mockedEndpointData = await this.getMockedEndpointData();
        if (mockedEndpointData === null) throw new Error("Can't get seen requests for unknown mocked endpoint");

        let seenRequestsData = mockedEndpointData.seenRequests;

        return seenRequestsData;
    }
}