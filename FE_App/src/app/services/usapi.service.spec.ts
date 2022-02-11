import { TestBed } from '@angular/core/testing';
import { USApiService } from './usapi.service';

describe('USApiService', () => {
    let service: USApiService;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(USApiService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});