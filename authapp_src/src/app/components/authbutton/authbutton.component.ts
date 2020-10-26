

@Component({
  selector: 'app-authbutton',
  templateUrl: './authbutton.component.html',
  styles: [
  ]
})
export class AuthbuttonComponent implements OnInit {

  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService) 
  {}

  ngOnInit(): void 
  {

  }

}
