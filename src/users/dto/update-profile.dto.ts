import { ApiProperty, PartialType } from "@nestjs/swagger";
import { CreateProfileDto } from "./create-profile.dto";

export class UpdateProfileDto extends PartialType(CreateProfileDto) {
  name?: string;
  @ApiProperty() profilePic?: string;
  @ApiProperty() phone?: string;
  @ApiProperty() division?: string;
  @ApiProperty() position?: string;
  @ApiProperty() alamat?: string;
}
