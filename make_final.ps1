$src=(Get-ChildItem 'C:\Users\academia\Downloads\*.pptx' | Select-Object -First 1).FullName
$out='C:\project\inimu-workshop\inimu_proposal_final_editable.pptx'
$zip='C:\project\inimu-workshop\inimu_final.zip'
$dir='C:\project\inimu-workshop\inimu_final'
Copy-Item $src $zip -Force
if(Test-Path $dir){Remove-Item -Recurse -Force $dir}
Expand-Archive $zip $dir
function Replace-Nth($file,$idx,$new){
  $raw=[IO.File]::ReadAllText($file,[Text.Encoding]::UTF8)
  $ms=[regex]::Matches($raw,'<a:t>.*?</a:t>')
  if($idx -lt $ms.Count){
    $escaped=[System.Security.SecurityElement]::Escape($new)
    $raw=$raw.Substring(0,$ms[$idx].Index)+'<a:t>'+($escaped -replace '&amp;','&amp;')+'</a:t>'+$raw.Substring($ms[$idx].Index+$ms[$idx].Length)
    [IO.File]::WriteAllText($file,$raw,(New-Object Text.UTF8Encoding($false)))
  }
}
$s5=Join-Path $dir 'ppt\slides\slide5.xml'
$s6=Join-Path $dir 'ppt\slides\slide6.xml'
Replace-Nth $s5 1 'TOP / SHOP / EXPERIENCE'
Replace-Nth $s5 2 'TOP -> SHOP / EXPERIENCE'
Replace-Nth $s5 3 'TOP'
Replace-Nth $s5 4 'SHOP'
Replace-Nth $s5 5 'EXPERIENCE'
Replace-Nth $s5 6 'WORKSHOP'
Replace-Nth $s5 7 'RESERVATION'
Replace-Nth $s5 8 'EXPERIENCE -> WORKSHOP -> RESERVATION'
Replace-Nth $s6 1 'SIMPLE RESERVATION / DEEPER LEARNING'
Replace-Nth $s6 2 'EXPERIENCE -> WORKSHOP -> RESERVATION'
Replace-Nth $s6 3 'WORKSHOP: inimu -> aroma -> imagine -> remove doubt -> reserve. After the experience: QR survey -> data -> next web / experience design.'
if(Test-Path $out){Remove-Item $out -Force}
Compress-Archive -Path (Join-Path $dir '*') -DestinationPath $zip -Force
Move-Item $zip $out -Force
Remove-Item -Recurse -Force $dir
Write-Output $out
