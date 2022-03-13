import { Injectable } from "@angular/core";

@Injectable()
export class UniqueIdService
{
  private numberOfGeneratedIds = 0;

  public generateUniqueIdWithPrefix(prefix: string): string
  {
    const uniqueId = this.generateUniqueId();
    this.numberOfGeneratedIds++;
     return ``;
  }

  private generateUniqueId(): string {
    return null;
  }
}
