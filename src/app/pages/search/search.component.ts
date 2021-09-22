import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Domain } from 'src/app/interfaces/domain';
import { DomainService, WindowRefService } from 'src/app/services';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchPage implements OnInit {

  public query = '';
  public buttonDisabled = true;
  public domainData = {} as Domain ;

  constructor(
    private route: ActivatedRoute,
		private router: Router,
    private domain:DomainService,
    private _win:WindowRefService

  ) {}
  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      this.query = (params['q'])? params['q'] : "";
      this.buttonDisabled = !this.query.length ;

      //if(!this._win.isBrowser()){
        this.domain.getDomain(this.query).subscribe((result: Domain)=>{
          this.domainData = result;

          console.log(  this.domainData );
        });
      //}
    });
  }

  changeSearch(e:KeyboardEvent): void{
    this.buttonDisabled = !(((e.target as HTMLInputElement).value.length) as unknown as boolean);
  }

  redirectToHome(){
    this.router.navigate(['/home']);
  }
}
