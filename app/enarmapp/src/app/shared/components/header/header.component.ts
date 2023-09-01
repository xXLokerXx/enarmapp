import { SocialAuthService } from "@abacritt/angularx-social-login";
import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { PreferencesService } from "../../services/preferences.service";

@Component({
    selector: 'enarm-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

    @Input() profile = 'Jose';

    isOpen = false;

    constructor(
        public router: Router,
        public preferencesService: PreferencesService,
        public socialAuthService: SocialAuthService
    ) {

    }

    async logout() {
        await this.preferencesService.clearAllItems();
        try {
            await this.socialAuthService.signOut()
            this.router.navigateByUrl('login');

        } catch (error) {
            console.log(error)
            this.router.navigateByUrl('login');
        }

    }
}