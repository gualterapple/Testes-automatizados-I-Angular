import { UniqueIdService } from './unique-id.service';

describe(UniqueIdService.name, () => {

  let service = null;

  beforeEach(()=>{
    service = new UniqueIdService();
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should generate id when called with prefix`, () => {
    const id = service.generateUniqueIdWithPrefix('app');
    expect(id.startsWith('app-')).toBeTrue();
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should not generate ids when called multiple times`, () => {
    const ids = new Set();
    for(let i = 0; i<=50; i++)
    {
      ids.add(service.generateUniqueIdWithPrefix('app'));
    }
    expect(ids.size).not.toBe(50);

  });

  it(`#${UniqueIdService.prototype.getNumberOfGeneratedIds.name} should return the number of generatedId when called`, () => {
    service.generateUniqueIdWithPrefix('app');
    service.generateUniqueIdWithPrefix('app');
    expect(service.getNumberOfGeneratedIds()).toBe(2);

  });

});
