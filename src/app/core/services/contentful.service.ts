import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Product } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {
  private client = createClient({
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.accessToken
  });

  getProducts(): Observable<Product[]> {
    return from(
      this.client.getEntries({
        content_type: 'assesment'
      })
    ).pipe(
      map(response => this.mapProducts(response.items))
    );
  }

  getFeaturedProducts(): Observable<Product[]> {
    return from(
      this.client.getEntries({
        content_type: 'assesment',
        'fields.featured': true
      })
    ).pipe(
      map(response => this.mapProducts(response.items))
    );
  }

  getProductById(id: string): Observable<Product> {
    return from(
      this.client.getEntry(id)
    ).pipe(
      map(entry => this.mapProduct(entry))
    );
  }

  private mapProducts(entries: Entry<any>[]): Product[] {
    return entries.map(entry => this.mapProduct(entry));
  }

  private mapProduct(entry: Entry<any>): Product {
    const fields = entry.fields as any;
    
    let description = '';
    if (fields.description) {
      if (typeof fields.description === 'string') {
        description = fields.description;
      } else if (fields.description.content) {
        description = fields.description.content
          .map((node: any) => {
            if (node.nodeType === 'paragraph' && node.content) {
              return node.content.map((c: any) => c.value || '').join('');
            }
            return '';
          })
          .join(' ');
      }
    }
    
    return {
      id: entry.sys.id,
      title: fields.title || '',
      description: description,
      price: fields.price || 0,
      category: fields.catogary || '',
      image: fields.image?.fields?.file?.url ? `https:${fields.image.fields.file.url}` : '',
      featured: fields.featured || false
    };
  }
}
