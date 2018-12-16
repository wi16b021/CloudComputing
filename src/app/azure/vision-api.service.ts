import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Ocp-Apim-Subscription-Key': '25400f3c02154d27aec789f4477cfca2'
  })
};

@Injectable({
  providedIn: 'root'
})
export class VisionApiService {

  private apiUrl = 'https://northeurope.api.cognitive.microsoft.com/vision/v2.0/analyze?visualFeatures=Categories,Tags,Description,Faces,ImageType,Color';

  constructor(
    private http: HttpClient
  ) { }

  analyze(fileToUpload: File) {
    const formData: FormData = new FormData();
    formData.append('file', fileToUpload);
    return this.http.post<string>(this.apiUrl, formData, httpOptions);
  }

}
