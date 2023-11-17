import * as dotenv from 'dotenv'; 
dotenv.config();

import { get } from "http";
import { Test } from "@nestjs/testing";
import { NluService } from "../src/nlu/nlu.service";
import { NluController } from "../src/nlu/nlu.controller";

describe("NluController", () => {
    let nluController: NluController;
    let nluService: NluService;

    beforeEach(async () => {
        const moduleRef = await Test.createTestingModule({
            controllers: [NluController],
            providers: [NluService],
    }).compile();

    nluService = moduleRef.get<NluService>(NluService);
    nluController = moduleRef.get<NluController>(NluController);
});

    describe("getAnalysis", () => {
        it("should return an object with keywords and categories", async () => {
            const result = {
                keywords: (await nluService.getAnalysis("I am happy")).keywords,
                categories: (await nluService.getAnalysis("I am happy")).categories

            };
            jest.spyOn(nluService, "getAnalysis").mockImplementation(() => Promise.resolve(result));
            expect(await nluService.getAnalysis("I am happy")).toBe(result);
        });
    });
});