import { Injectable } from '@nestjs/common';

@Injectable()
export class PermissionsService {
    
    constructor(
        @InjectRepository(Permission)
        private readonly permissionRepository: Permis
    ) { }

    onModuleInit() {
        console.log('Permission module initialized')
        this.createPermission(permissionListArry)
    }

    async createPermission(perArr: CreatePermissionDTO[]) {
        for (let i = 0; i < perArr.length; i++) {
            const permission = await this.permissionRepository.findOne({ pcode: perArr[i].pcode });
            if (!permission) {
                let permissionObject = {
                    pcode: perArr[i].pcode,
                    permissionName: perArr[i].permissionName
                }
                await this.permissionRepository.insert(permissionObject)
            }
        }
        return null
    }

    async checkPermissionsIfExists(permssionIds: number[]): Promise<boolean> {
        const permissions = await this.permissionRepository.findByIds(permssionIds);
        if (permissions.length === permssionIds.length) {
            return true;
        } else {
            return false;
        }
    }

    async findPermissionByIds(permissionIds: number[]): Promise<Permission[]> {
        // console.log('permissionIds',permissionIds)
        return await this.permissionRepository.findByIds(permissionIds);
    }
}
